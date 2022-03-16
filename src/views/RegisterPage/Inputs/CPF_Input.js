import InputMask from "react-input-mask";
const CPFInput = (props) => (
  <InputMask mask="999.999.999-99" value={props.value} onChange={props.onChange} className='default-input input-dark' name='id' placeholder='CPF'/>
);

export default CPFInput;
