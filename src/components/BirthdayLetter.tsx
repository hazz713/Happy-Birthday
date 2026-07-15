import { TypewriterLetter } from "./TypewriterLetter";

const letter = `Hai? how's life? 
gimana rasanya jadi siswa lulusan terbaik di sekolah kemarin? senengg bangett yaa?
orang orang juga bangga juga ya pastinya sama kamu ahahashshsh happy graduation ya!
teruss masukk ke smk negerii yg kamu mau? aku seneng banget dengernya, kamu terus berkembang 
jauh lebi baik, kamu makin keren dan lebi hebat, aku bangga banget sama kamu yang uda berubah lebi baik sejauh ini, berkembang sejauh ini,
izinin doa doa  baik aku selalu menyertai kamu terus ya?, maaf ya kalo semua ini jelek ehehe aku cuma gatau mau nyampein dan rayain ini untukmu gimana, jadi
aku coba pake cara ini dan berusaha sebisaku buat bikin 2 hal ini, soalnya takut ngeganggu hidup kamu yang lagi baik baik aja, ohiya ada satu chapter lagi scroll ya
em i hope kamu bahagia terus ya?  
Semoga dunia selalu
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