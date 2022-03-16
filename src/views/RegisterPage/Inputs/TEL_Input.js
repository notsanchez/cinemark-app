import InputMask from "react-input-mask";
const TEL_Input = (props) => (
  <InputMask mask="+55 999999999" value={props.value} onChange={props.onChange} className='default-input input-dark' name='phone' placeholder='Telefone' />
);

export default TEL_Input;