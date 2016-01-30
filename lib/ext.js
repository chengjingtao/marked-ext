var marked=require('marked')
function XRenderer(options) {
    marked.Renderer.call(XRenderer, options);
    this.flowIndex = 0;
    this.seqIndex=0;
}

inhert(XRenderer, marked.Renderer);

XRenderer.prototype.code = function (code, lang, escaped) {
    if (!lang) {
        marked.Renderer.prototype.code.call(this, code, lang, escaped);
        return
    }

    if (lang === "flow") {
        var dep = "";
        var index = ++this.flowIndex;
        if (index === 1) {
            if(this.seqIndex===0){
                dep += "\n<script src='./raphael-min.js' ></script>"    
            }
            dep+="<script src='./flowchart-latest.js'></script>\n"            
        }

        var id = 'flowchart-' + index;
        var ele = `<div id ='${id}'><div>`;
        var script = `
        <script>
            (function(){
                var diagram = flowchart.parse(\`${code}\`);
                diagram.drawSVG('${id}')
            })()
        </script>`
        
        return dep + ele + "\n" + script+"\n";
    }

    if (lang === "seq") {
        var dep = "";
        var index = ++this.seqIndex;
        if(this.seqIndex===1){
            if(this.flowIndex===0){
                dep += "\n<script src='./raphael-min.js' ></script>"    
            }
            
            dep += `\n<script src='./underscore-min.js'></script>
            <script src='./sequence-diagram-min.js'></script>`+"\n"
        }
        

        var id = 'seqchart-' + index;
        var ele = `<div id ='${id}'><div>`;
        var script = `
        <script>
            (function(){
                var diagram = Diagram.parse(\`${code}\`);
                diagram.drawSVG('${id}')
            })()
        </script>`
        
        return dep + ele + "\n" + script+"\n";
    }
}

function inhert(sub, parent) {
    var f = function () { };
    f.prototype = parent.prototype;
    sub.prototype = new f();
    sub.prototype.constructor = sub;
    sub.uper = parent.prototype;
}

module.exports={
    renderer:XRenderer
}