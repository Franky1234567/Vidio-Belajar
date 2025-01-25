import { useState, useEffect } from 'react'; 
import FormField from "../InputField";

const CardProfile = () => {
    const [formdata, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        tel: "",
        
    });

    const [tempFormData, setTempFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        tel: "",
    });

    useEffect(() => {
        const data = localStorage.getItem("datauser");
        if (data) {
            const parsedData = JSON.parse(data);
            setFormData(parsedData);
            setTempFormData(parsedData); 
        }
    }, []);

    const handleSaveProfile = () => {
        setFormData(tempFormData);
        localStorage.setItem("datauser", JSON.stringify(tempFormData));
        alert("Data diperbarui");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTempFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <>
            <div className="bg-white w-full mx-auto p-5 drop-shadow-lg ">
                <div className="flex">
                    <div>
                        <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-1024.png" className="w-14"/>
                    </div>
                    <div className="px-5 text-left">
                        <h1>{formdata.name}</h1>
                        <p>{formdata.email}</p>
                        <p className="text-red-600 text-sm py-2"><a href="">Ganti foto Profil</a></p>
                    </div>
                </div>
                <hr className="border-t-2 my-5"/>
                <div className="">
                    <form className="flex flex-col md:flex-row justify-between gap-3 my-5">
                        <FormField type={"text"} label="Nama" name="name" placeholder="Jennie Ruby Jane" value={tempFormData.name} onChange={handleChange} />
                        <FormField type={'password'} label="Password" name="password" placeholder="********" value={tempFormData.password} onChange={handleChange} />
                        <FormField type={'email'} label="Email" name="email" placeholder="rubyjane@gmail.com" value={tempFormData.email} onChange={handleChange} />
                        <FormField type={'tel'} label="tel" name="tel" placeholder="08123456789" value={tempFormData.tel} onChange={handleChange} />
                    </form>
                </div>
                <div className="text-right">
                    <button type="button" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg" onClick={handleSaveProfile}>Simpan</button>
                </div>
            </div>
        </>
    );
};

export default CardProfile;

