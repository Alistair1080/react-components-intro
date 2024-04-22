import Logo from "./Logo"

function MainEl () {
    return (
        <main>
        <Logo></Logo>
        <input className="search-bar" type="search" />
        <div className="buttons">
          <button>Google Search</button>
          <button>Feeling Lucky</button>
        </div>
      </main>
    )
}

export default MainEl