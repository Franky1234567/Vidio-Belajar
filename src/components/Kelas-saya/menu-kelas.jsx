import { Link } from "react-router";

const Menukelas = ()=>{
    const menukelas = [
        { text: 'Semua Kelas', to: 'Semuakelas' },
        { text: 'Sedang Berjalan', to: 'Sedangberjalan' },
        { text: 'Selesai', to: '/Selesaikelas' },
    ];
    return (
        <>
            <div className="text-left flex items-center h-10">
                {menukelas.map((kelas, index) => (
                <Link
                    to={kelas.path}
                    key={index}
                    className={`mx-4 hover:text-orange-400 `}
                >
                    {kelas.text}
                </Link>
            ))}
        </div>
        </>
    )
}

export default Menukelas;