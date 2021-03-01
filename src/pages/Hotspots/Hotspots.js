import React from 'react'
import Hero from '../Dashboard/DashComp/hero/Hero'
import HeroIllustration from '../Dashboard/DashComp/hero/HeroIllustration'
// prettier-ignore
export default function IndexPage(data) {
  return (
    <div>

      <div className="context" >
        {/* <Hero style={{ paddingTop: 100 }}
          title="צהרים טובים יובל רוזנבוש,"
          content="במקום לשער, אפשר לקבל תשובות מדויקות!
						הגיע הזמן לקבל תובנות משמעותיות בכדי לפעול."
          secondContent="תן לדאטה לעבוד בשבילך"
          illustration={HeroIllustration}
        /> */}

        <div className="container-sm">
          <h1 className="hero-title h2-mobile mt-0 is-revealing">ערב טוב יובל רוזנבוש</h1>
          <h4 className="hero-paragraph is-revealing">אנחנו מעבדים את הנתונים אבל גם כעת, גם בשעות אלו - יש צורך בתובנות.</h4>
          <h4 className="hero-paragraph is-revealing">מה תרצה לדעת בשעה זו?</h4>
        </div>
      </div>

      <div style={{
        backgroundImage: data.picture,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: "100%",
        height: "100vh"
      }} >

      </div>

    </div>
  );
}
