import styles from '../../styles/Home.module.css'
const CodeSnippet = ()=>{

  return (
<code className={styles.code}>
  
<code>import os,time <br/></code>
<code>import speech_recognition as sr<br/></code>
<br/>
<code>r   = sr.Recognizer()<br/></code>
<code>while True:<br/></code>
<code>&nbsp;&nbsp;&nbsp;&nbsp;with sr.Microphone() as source:<br/></code>
<code>&nbsp;&nbsp;&nbsp;&nbsp;print("Say something: ")<br/></code>
<code>&nbsp;&nbsp;&nbsp;&nbsp;audio   = r.listen(source)<br/></code>
<code>&nbsp;&nbsp;&nbsp;&nbsp;  try:<br/></code>
<code>      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text    = r.recognize_google(audio)<br/></code>
<code>      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(text)<br/></code>
<code>      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;time.sleep(2)<br/></code>
<code>  &nbsp;&nbsp;&nbsp;&nbsp;except:<br/></code>
<code>      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print('Unable to recognize.')<br/></code>
<code>      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;time.sleep(2)<br/></code>
</code>
  )
}
export default CodeSnippet