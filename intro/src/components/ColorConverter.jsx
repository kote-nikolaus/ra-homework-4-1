import './converter.css';
import {useState} from 'react';
import hexRgb from 'hex-rgb';

export default function HexConverter() {

  const [form, setForm] = useState({rgb: ''});

  function changeColor() {
    if (form.rgb !== "Ошибка!") {
      return {
        backgroundColor: form.rgb,
      }
    } else {
      return {
        backgroundColor: "",
      }
    }
  }

  function convertColor(hexColor) {
    let rgb;
    try {
      rgb = hexRgb(hexColor, {format: 'css'});
    } catch(e) {
      rgb = "Ошибка!"
    }
    return rgb;
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
  }

  const onInputChange = (e) => {
    if (e.target.value.length === 7) {
      setForm(prev => ({...prev, rgb: convertColor(e.target.value)}))
    }
    if (e.target.value.length > 7 || e.target.value.charAt(0) !== '#') {
      setForm(prev => ({...prev, rgb: "Ошибка!"}));
    }
  }

  return (
    <div className='wrapper' style={changeColor()}>
      <div className='form-wrapper'>
        <form className='form-converter' onSubmit={onFormSubmit}>
          <input className='color hex-color'onChange={onInputChange} placeholder='#FFFFFF'/>
        </form>
        <div className='color rgb-color'>{form.rgb}</div>
      </div>
    </div>
  )
}
