import { getCurrentDate } from "@/lib/utils";
import { useRef, useState } from "react";
import logoPuskesmas from "../../assets/logo-puskesmas.png";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { FaBold, FaItalic } from "react-icons/fa";
import { AiOutlineOrderedList } from "react-icons/ai";
import SignatureCanvas from "react-signature-canvas";

const RecommendationLetter = ({
  dinas = "Dinas Kesehatan",
  upt = "UPT Puskesmas Bandung",
  address = "Jl Cibiru hilir nomor 18 kabupatebn bandung, indonesia",
  phone = "Telp: 021 234 567",
  email = " Email: puskesmasacc1@gmail.com",
  healthCareName = "Puskesmas Dayeuhkolot",
  schoolName = "SD CIbiru Hilir",
  nis,
  studentName,
  studentBirthDate,
  studentHeight,
  studentWeight,
  studentNutritionStatus,
  nutritionScore,
  behaviourScore,
  signature,
  recommendation,
}) => {
  const letterRef = useRef(null);
  const imgRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const contentEditRef = useRef(null);
  const [contentState, setContentState] = useState([
    {
      type: "bold",
      value: false,
    },
    {
      type: "italic",
      value: false,
    },
    {
      type: "insertOrderedList",
      value: false,
    },
  ]);
  const [imgUrl, setImgUrl] = useState(null);
  console.log({ contentState });

  const handleCommand = (command) => {
    contentEditRef.current.focus();
    document.execCommand(command, false, null);
    setContentState((prevValue) =>
      prevValue.map((value) => {
        return {
          ...value,
          value: value.type === command ? !value.value : value.value,
        };
      })
    );
  };

  const handleSubmit = () => {
    console.log(imgUrl);
    console.log({ contentEdit: contentEditRef.current.innerHTML });
  };
  console.log(contentState[0].value);

  return (
    <section className="bg-white py-4 rounded-md">
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
        <section className="px-10">
          <p>Kepada</p>
          <p>Yth. Kepala Sekolah SD Cibiru Hilir</p>
          <p>dan Orang Tua / Wali Siswa</p>
          <p>Dengan hormat,</p>
        </section>
        <section className="px-10 flex flex-col gap-3">
          {/* <p>
            Yang bertanda tangan di bawah ini, staff / kepala puskesmas{" "}
            {institution_name}, menerangkan bahwa siswa berikut:
          </p> */}
          <p>
            Menindaklanjuti permintaan dari pihak sekolah terkait pemeriksaan
            kesehatan siswa, khususnya mengenai tinggi badan (TB), berat badan
            (BB), dan status gizi, kami dari Puskesmas [Nama Puskesmas] telah
            melakukan pemeriksaan terhadap siswa berikut:
          </p>
          <div>
            <h1>Nama: Ripan Renaldi</h1>
            <h1>NIS: Ripan Renaldi</h1>
            <h1>Tanggal Lahir: 17 Mei 2018</h1>
            <h1>Sekolah: SD Cibiru Hilir</h1>
          </div>
          <p>Denggan Informasi gizi berikut:</p>
          <div>
            <h1>Tinggi Badan: 165 cm</h1>
            <h1>Berat Badan: 55 kg</h1>
            <h1>Status Gizi: NORMAL</h1>
            <h1>Skor Pengetahuan tentang gizi seimbang: 70 / 100</h1>
            <h1>Skor Perilaku Anak: 60 / 100</h1>
          </div>
          <div>
            <p>
              Berdasarkan hasil pemeriksaan, kami merekomendasikan agar pihak
              sekolah dan orang tua/wali siswa agar:
            </p>
            <section className="content flex flex-col gap-1 mt-2">
              <div className="editor flex">
                <div>
                  <Button
                    variant="outline"
                    onClick={() => handleCommand("bold")}
                    className={`${
                      contentState[0].value && "bg-black text-white"
                    }`}
                  >
                    <FaBold />
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleCommand("italic")}
                    className={`${
                      contentState[1].value && "bg-black text-white"
                    }`}
                  >
                    <FaItalic />
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleCommand("insertOrderedList")}
                  >
                    <AiOutlineOrderedList />
                  </Button>
                </div>
              </div>
              <div
                contentEditable
                className="w-full min-h-48 border border-gray-300 rounded p-2 focus:outline-none list-decimal"
                ref={contentEditRef}
              ></div>
            </section>

            {/* <div className="flex items-center gap-2">
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
            </div> */}
          </div>
          <p>
            Demikian surat rekomendasi ini kami sampaikan. Kami berharap kerja
            sama dari pihak sekolah dan orang tua/wali untuk mendukung kesehatan
            dan pertumbuhan siswa yang optimal
          </p>
          <p>Atas perhatian dan kerja samanya, kami ucapkan terima kasih.</p>
        </section>
      </main>
      <footer className="flex flex-col px-10 mt-2 gap-4 z-20">
        {/* <div>
          <h1>
            {institution_name}, {getCurrentDate()}
          </h1>
          <h1>Hormat kami,</h1>
          <h1>Staff / Kepala Puskesmas {institution_name},</h1>
        </div> */}
        <div>
          {!imgUrl && (
            <div className="relative w-[500px] h-[250px]">
              <SignatureCanvas
                penColor="purple"
                canvasProps={{
                  width: 500,
                  height: 250,
                  className: "sigCanvas border-2 rounded-lg ",
                }}
                ref={letterRef}
              />
              <div className="absolute bottom-2 right-2 flex gap-2">
                <Button
                  onClick={() => {
                    const url = letterRef.current.toDataURL("image/png");
                    setImgUrl(url);
                  }}
                >
                  Save
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {
                    letterRef.current.clear();
                    setImgUrl(null);
                  }}
                >
                  Clear
                </Button>
              </div>
            </div>
          )}
          {imgUrl && (
            <img
              src={imgUrl}
              className="size-40 object-contain object-center"
            />
          )}
          <h1>Nama Staff / kepala puskesmas, Dayeuhkolot</h1>
          <h1>NIP. 102022480029</h1>
        </div>
      </footer>
      <div className="p-10">
        <Button className="w-full" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </div>
    </section>
  );
};

export default RecommendationLetter;
