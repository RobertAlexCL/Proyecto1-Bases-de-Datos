import React from "react";

export class Dashboard extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="container">
      <nav> Navbar </nav>
      <main> Search </main>
      <div id= "sidebar"> Playlists</div>
      <div id= "content1"> Profile</div>
      <div id= "content2"> Content2</div>
      <div id= "content3"> Content3</div>
      <footer> Footer </footer>
      </div>
    )
  }
}
