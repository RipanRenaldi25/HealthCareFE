import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import logoPuskesmas from "../../assets/logo-puskesmas.png";
import { getCurrentDate } from "@/lib/utils";
import { FaCheck } from "react-icons/fa6";

const RecommendationLetter = ({
  dinas = "Dinas Kesehatan",
  upt = "UPT Puskesmas Bandung",
  address = "Jl Cibiru hilir nomor 18 kabupatebn bandung, indonesia",
  phone = "Telp: 021 234 567",
  email = " Email: puskesmasacc1@gmail.com",
  institution_name = "Puskesmas Dayeuhkolot",
}) => {
  const letterRef = useRef(null);
  const imgRef = useRef(null);
  return (
    <section className="bg-white py-4 rounded-md relative">
      <img
        src={logoPuskesmas}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 size-96 z-10 pointer-events-none select-none"
      />
      <header className="flex flex-col items-center z-20">
        <h1 className="font-bold text-2xl">{dinas}</h1>
        <h1 className="font-bold text-2xl">{upt}</h1>
        <p className="font-light text-sm">{address}</p>
        <p className="font-light text-sm">
          {phone} / {email}{" "}
        </p>
      </header>
      <div className="flex items-center z-20">
        <div className="size-2 bg-gradient-to-l from-[#004E00] to-[#1B82E6]  w-full"></div>
        <img src={logoPuskesmas} />
        <div className="size-2 bg-gradient-to-r from-[#004E00] to-[#1B82E6] w-full"></div>
      </div>
      <main className="flex flex-col gap-4 z-20">
        <header className="text-center">
          <h1 className="font-semibold text-lg">
            SURAT KETERANGAN HASIL PEMERIKSAAN KESEHATAN SISWA
          </h1>
          <p>No: 001/SK/WEB/UPT/2025</p>
        </header>
        <section className="px-10 flex flex-col gap-3">
          <p>
            Yang bertanda tangan di bawah ini, staff / kepala puskesmas{" "}
            {institution_name}, menerangkan bahwa siswa berikut:
          </p>
          <div>
            <h1>Nama: Ripan Renaldi</h1>
            <h1>NIS: Ripan Renaldi</h1>
            <h1>Tanggal Lahir: 17 Mei 2018</h1>
            <h1>Sekolah: SD Cibiru Hilir</h1>
          </div>
          <p>
            Telah dilakukan pemeriksaan nutrisi pada tanggal{" "}
            {getCurrentDate()}, dan berdasarkan hasil pemeriksaan tersebut,
            siswa yang bersangkutan dinyatakan berbadan SEHAT
          </p>
          <p>Adapun rincian hasil pemeriksaan sebagai berikut: </p>
          <div>
            <h1>Tinggi Badan: 165 cm</h1>
            <h1>Berat Badan: 55 kg</h1>
            <h1>Status Gizi: NORMAL</h1>
            <h1>Skor Pengetahuan tentang gizi seimbang: 70 / 100</h1>
            <h1>Skor Perilaku Anak: 60 / 100</h1>
          </div>
          <div>
            <p>
              Berdasarkan data tersebut, kami merekomendasikan tindakan sebagai
              berikut:
            </p>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1">
                [<FaCheck className="text-black font-semibold" />]
              </span>
              <p>Pemberian makanan tambahan</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1">
                [<FaCheck className="text-black font-semibold" />]
              </span>
              <p>Konseling gizi bagi siswa dan orang tua</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1">
                [<FaCheck className="text-black font-semibold" />]
              </span>
              <p>Edukasi PHBS (Perilaku Hidup Bersih dan Sehat)</p>
            </div>
          </div>
          <p>
            Demikian surat keterangan ini dibuat untuk dapat digunakan
            sebagaimana mestinya.
          </p>
        </section>
      </main>
      <footer className="flex flex-col px-10 mt-2 gap-4 z-20">
        <div>
          <h1>
            {institution_name}, {getCurrentDate()}
          </h1>
          <h1>Hormat kami,</h1>
          <h1>Staff / Kepala Puskesmas {institution_name},</h1>
        </div>
        <div>
          <h1>Tanda tangan</h1>
          <h1>Nama Staff / kepala puskesmas,</h1>
          <h1>NIP. 102022480029</h1>
        </div>
      </footer>
    </section>
  );
};

export default RecommendationLetter;

{
  /* <div className="relative bg-green-500">
        <SignatureCanvas
          penColor="purple"
          canvasProps={{
            width: 500,
            height: 200,
            className: "sigCanvas bg-red-500 ",
          }}
          ref={letterRef}
        />
      </div> */
}
