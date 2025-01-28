import { useState, useEffect } from 'react';
import FormField from "../InputField";

const initialFormState = {
    name: "",
    email: "",
    phone: "",
    password: "",
    tel: "",
    image: ""
};

const CardProfile = () => {
    const [formdata, setFormData] = useState(initialFormState);
    const [tempFormData, setTempFormData] = useState(initialFormState);
    const [gambarprofile, setGambarProfile] = useState("https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-1024.png");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        try {
            const data = localStorage.getItem("datauser");
            if (data) {
                const parsedData = JSON.parse(data);
                setFormData(parsedData);
                setTempFormData(parsedData);
                if (parsedData && parsedData.image) {
                    setGambarProfile(parsedData.image);
                }
            }
        } catch (error) {
            console.error('Error loading user data:', error);
            alert('Gagal memuat data pengguna');
        }
    }, []);

    // Cleanup URL object ketika component unmount
    useEffect(() => {
        return () => {
            if (gambarprofile && gambarprofile.startsWith('blob:')) {
                URL.revokeObjectURL(gambarprofile);
            }
        };
    }, [gambarprofile]);

    const handleSaveProfile = async () => {
        try {
            setIsLoading(true);
            // Validasi nama
            // if (!tempFormData.name.trim()) {
            //     alert('Nama tidak boleh kosong');
            //     return;
            // }
            // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            // if (!tempFormData.email || !emailRegex.test(tempFormData.email)) {
            //     alert('Email tidak valid');
            //     return;
            // }
            // const phoneRegex = /^\d{10,}$/;
            // if (!tempFormData.tel || !phoneRegex.test(tempFormData.tel)) {
            //     alert('Nomor telepon tidak valid (minimal 10 digit)');
            //     return;
            // }
            // if (tempFormData.password && tempFormData.password.length < 6) {
            //     alert('Password harus minimal 6 karakter');
            //     return;
            // }
            setFormData(tempFormData);
            localStorage.setItem("datauser", JSON.stringify(tempFormData));
            alert("Data berhasil diperbarui");
        } catch (error) {
            console.error('Error saving profile:', error);
            alert("Gagal menyimpan data");
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTempFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                alert('Ukuran file terlalu besar. Maksimal 5MB');
                return;
            }
            if (!file.type.startsWith('image/')) {
                alert('File harus berupa gambar');
                return;
            }
    
            try {
                // Convert file ke base64
                const reader = new FileReader();
                reader.onload = (event) => {
                    const base64String = event.target.result;
                    setGambarProfile(base64String);
                    setTempFormData((prev) => ({
                        ...prev,
                        image: base64String
                    }));
                };
                reader.readAsDataURL(file);
            } catch (error) {
                console.error('Error processing image:', error);
                alert('Gagal memproses gambar');
            }
        }
    };

    
    return (
        <>
            <div className="bg-white w-full mx-auto p-5 drop-shadow-lg ">
                <div className="flex">
                    <div>
                        <img src={gambarprofile} className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                            alt="Profile"/>
                    </div>
                    <div className="px-5 text-left">
                        <h1>{formdata.name}</h1>
                        <p>{formdata.email}</p>
                        <p className="text-red-600 text-sm py-2 cursor-pointer hover:text-red-800"><label className="cursor-pointer">Ganti foto Profil
                            <input type="file" className="hidden" onChange={handleAvatarChange} accept="image/*" /></label>
                            
                        </p>
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
                <div className="text-right mt-4">
                    <button 
                        type="button" 
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200 disabled:bg-gray-400"
                        onClick={handleSaveProfile}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Menyimpan...' : 'Simpan'}
                    </button>
                </div>
            </div>
        </>
    );
};

export default CardProfile;

