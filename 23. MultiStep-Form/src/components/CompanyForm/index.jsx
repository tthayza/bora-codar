export const CompanyForm = (props) => {
  const { visibility, currentDisplayCompanyBack, currentDisplayCompanyNext } =
    props
  return (
    <div style={{ display: visibility }}>
      <h1>CompanyForm</h1>
      <button onClick={currentDisplayCompanyBack}>Voltar</button>
      <button onClick={currentDisplayCompanyNext}>Continuar</button>
    </div>
  )
}
