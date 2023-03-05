import './Cards.css'

function Cards(props){

    const classes = 'card ' + props.className;
    console.log(props)

    return (
      // props.children: children is reserve name
      // with props.children, we could wrap our custom component
      <div className={classes}>{props.children}</div>
    )
}

export default Cards;