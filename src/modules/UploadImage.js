import Label from "../components/label/Label";
import { useDispatch, useSelector } from "react-redux";
import {
  handleProgress,
  handleRemoveImage,
  setLink_image,
  setName_image,
} from "../slice/UploadImageSlice";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { toast } from "react-toastify";

const UploadImage = () => {
  const dispatch = useDispatch();
  const { progress, link_image, name_image } = useSelector(
    (state) => state.UploadImage
  );
  const handleChange = (e) => {
    const file = e.target.files[0];
    dispatch(setName_image(file.name));
    const storage = getStorage();
    const storageRef = ref(storage, "images/" + file.name);

    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        dispatch(handleProgress(progress));
      },
      (error) => {
        toast.error("Upload failed");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          dispatch(setLink_image(downloadURL));
        });
      }
    );
  };
  const handleRemove = () => {
    const storage = getStorage();
    try {
      // Create a reference to the file to delete
      const desertRef = ref(storage, "images/" + name_image);
      deleteObject(desertRef);
      dispatch(handleRemoveImage());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid gap-y-3 relative">
      <Label htmlFor="poster">Poster of news</Label>
      <div
        htmlFor="poster"
        className="border rounded-md w-full h-[350px] bg-white relative"
      >
        <input
          className="w-full block h-[350px] p-4 border opacity-0" // Đặt kích thước của trường nhập tệp tin bằng lớp CSS
          onChange={handleChange}
          type="file"
          name="poster"
          placeholder="Input your slug of news...."
        ></input>
        {progress === 100 && (
          <div className="absolute top-0  w-full h-full object-cover group cursor-pointer">
            <img
              className="absolute top-0  w-full h-full object-cover rounded-md block"
              src={link_image}
              alt=""
            />
            <div className="absolute transition-all group-hover:opacity-100 rounded-full text-3xl opacity-0 text-red-500 bg-white  w-[50px] h-[50px] flex items-center top-[50%] left-[50%] justify-center">
              <i onClick={handleRemove} className="fa-solid fa-trash"></i>
            </div>
          </div>
        )}
        <div
          className={`rounded-md  transition-all border-blue absolute w-full bottom-0  `}
        >
          <div
            className={`w-none transition-all rounded-md h-full border-2 border-blue-400`}
            style={{
              width: `${Math.ceil(progress)}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
