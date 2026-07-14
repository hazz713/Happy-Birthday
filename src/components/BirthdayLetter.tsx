import { TypewriterLetter } from "./TypewriterLetter";

const letter = `Hai? how's life? 
gimana rasanya jadi siswa lulusan terbaik di sekolah kemarin? senengg bangett yaa?
orang orang juga bangga juga kan sama kamu ahahashshsh happy graduation ya!
teruss masukk ke smk negerii yg kamu mau? aku seneng banget dengernya, kamu terus berkembang 
jauh lebi baik, kamu makin keren dan lebi hebat, aku bangga banget sama kamu
i hope kamu bahagia terus ya?  
Semoga hidup selalu
memelukmu dengan lembut.
Selamat ulang tahun.`;

export function BirthdayLetter() {
  return (
    <div className="birthday-letter">

      <h3 className="letter-title">
        for u.
      </h3>


      <TypewriterLetter text={letter} />

    </div>
  );
}