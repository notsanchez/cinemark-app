import InputMask from "react-input-mask";
const CPFInput = (props) => (
  <InputMask mask="999.999.999-99" value={props.value} onChange={props.onChange} className='default-input input-dark' name='id' placeholder='CPF'/>
);

const TEL_Input = (props) => (
  <InputMask mask="+55 999999999" value={props.value} onChange={props.onChange} className='default-input input-dark' name='phone' placeholder='Telefone' />
);

export default CPFInput;