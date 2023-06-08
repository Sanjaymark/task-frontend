export default function Button({
    background, 
    color, 
    pd,
     m, 
     wd, 
     customClass,
     children,
     onClickFunc
    }){
    return(
        <button style={{
             background:background,
             color:color,
             border: "none",
             borderRadius:"5%",
             fontFamily:"sans-serif",
             padding:pd,
             width:wd,
             margin:m,

        }}
        className={customClass}
        onClick={onClickFunc}
        >
            {children}
        </button>
    )
}