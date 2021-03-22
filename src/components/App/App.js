/* eslint-disable */
import './App.css';
import ContentTile from '../ContentTile/ContentTile'
import { SnackbarProvider } from 'notistack'

function App() {
  return (
	<div>
	  <SnackbarProvider maxSnack={3} style={{direction:'rtl'}}>
		<ContentTile title="ליגת מיטב - סיכום מדדים"
		src="url('/Images/BackgroundTitles/report.png')"
		tags={["#ליגת מיטב","#ליגת מיטב", "#ליגת מיטב","#ליגת מיטב" ]}
		body={`סיכום מדדי ליגת מיטב
							ציון כולל המורכב מאחוז מסיימי הליכים בהתייצבות ראשונה,
							סה"כ זמני שהייה וציון מדדי איכות`}/>
	  </SnackbarProvider>	  <SnackbarProvider maxSnack={9} style={{direction:'rtl'}}>
		<ContentTile title="ליגת מיטב - סיכום מדדים"
		src="url('/Images/BackgroundTitles/report.png')"
		tags={["#ליגת מיטב","#ליגת מיטב", "#ליגת מיטב","#ליגת מיטב" ]}
		body={`סיכום מדדי ליגת מיטב
							ציון כולל המורכב מאחוז מסיימי הליכים בהתייצבות ראשונה,
							סה"כ זמני שהייה וציון מדדי איכות`}/>
	  </SnackbarProvider>	  <SnackbarProvider maxSnack={3} style={{direction:'rtl'}}>
		<ContentTile title="ליגת מיטב - סיכום מדדים"
		src="url('/Images/BackgroundTitles/report.png')"
		tags={["#ליגת מיטב","#ליגת מיטב", "#ליגת מיטב","#ליגת מיטב" ]}
		body={`סיכום מדדי ליגת מיטב
							ציון כולל המורכב מאחוז מסיימי הליכים בהתייצבות ראשונה,
							סה"כ זמני שהייה וציון מדדי איכות`}/>
	  </SnackbarProvider>	  <SnackbarProvider maxSnack={3} style={{direction:'rtl'}}>
		<ContentTile title="ליגת מיטב - סיכום מדדים"
		src="url('/Images/BackgroundTitles/report.png')"
		tags={["#ליגת מיטב","#ליגת מיטב", "#ליגת מיטב","#ליגת מיטב" ]}
		body={`סיכום מדדי ליגת מיטב
							ציון כולל המורכב מאחוז מסיימי הליכים בהתייצבות ראשונה,
							סה"כ זמני שהייה וציון מדדי איכות`}/>
	  </SnackbarProvider>	  <SnackbarProvider maxSnack={3} style={{direction:'rtl'}}>
		<ContentTile title="ליגת מיטב - סיכום מדדים"
		src="url('/Images/BackgroundTitles/report.png')"
		tags={["#ליגת מיטב","#ליגת מיטב", "#ליגת מיטב","#ליגת מיטב" ]}
		body={`סיכום מדדי ליגת מיטב
							ציון כולל המורכב מאחוז מסיימי הליכים בהתייצבות ראשונה,
							סה"כ זמני שהייה וציון מדדי איכות`}/>
	  </SnackbarProvider>
	</div>
  );
}

export default App;