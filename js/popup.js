function ask(title, text, func, placeholder, cancel, ok){
    let bd = document.querySelector('body'),
        cov = document.createElement('div'),
        con = document.createElement('div'),
        md = document.createElement('div'),
        t = document.createElement('h1'),
        a = document.createElement('input'),
        p = document.createElement('p'),
        f = document.createElement('div'),
        o = document.createElement('button'),
        c = document.createElement('button');
    cov.style=`
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0.9;
    `
    con.style=`
    display:flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    align-item: center;
    justify-content: center;
    `
    md.className = 'container'
    md.style = `
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow:0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;
    border-radius: 10px;
    padding: 10px;
    align-item: center;
    justify-content: center;
    `
    f.style = `
    display: flex;
    padding: 5px;
    justify-content: center;
    align-item: center;
    `
    t.textContent = title
    p.textContent = text

    a.type = 'text'
    if (placeholder) {
        a.placeholder = placeholder
    } else {
        a.placeholder = "Enter your answer here."
    }

    a.addEventListener('keypress', e=>{
        if (e.code == "Enter") {
            o.click()
        }
    })

    o.className = 'btn btn-primary'
    c.className = 'btn btn-outline-danger'
    if (ok) {
        o.textContent = ok
    } else {
        o.textContent = "ok"
    }
    if (cancel) {
        c.textContent = cancel
    } else {
        c.textContent = "cancel"
    }
    
    bd.appendChild(cov)
    bd.appendChild(con)
    con.appendChild(md)
    md.appendChild(t)
    md.appendChild(p)
    md.appendChild(a)
    md.appendChild(f)
    f.appendChild(o)
    f.appendChild(c)

    o.onclick = () => {
        bd.removeChild(con)
        bd.removeChild(cov)
        func(a.value)
    }
    c.onclick = () => {
        bd.removeChild(con)
        bd.removeChild(cov)
    }
}