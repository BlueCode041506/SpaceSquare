export default function ItemCard({ item, isFavorite, onToggleFavorite }) {
return (
<div className="Card"> 
    <img className="image" src={item.image} alt={item.desc}/>
        <div className="Card-Text">
            This is {item.Name}!
            
            {item.catagory ==="Squalian"&&(<p><em>We asked {item.Name} some questions!</em></p>)}
            <p>{item.Text}</p>
            <button type="button" className="submit" onClick={() => onToggleFavorite(item.id)}>{isFavorite?"♥" : "♡"}</button>
        </div>
</div>
);
}