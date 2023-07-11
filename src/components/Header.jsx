

function Header(pros) {
  console.log(pros);
  return (
    <header className="full-screen-header bg-primary text-white">
    <div className="container-fluid">
      <h1>Your Header: {pros.title}</h1>
      {/* Add any additional header content here */}
    </div>
  </header>
  )
}

export default Header