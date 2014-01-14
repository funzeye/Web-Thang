walk(document.body);

function walk(node)
{
        // I stole this code from:
        // https://github.com/panicsteve/cloud-to-butt
        
        var child, next;

        switch ( node.nodeType )
        {
                case 1: // Element
                case 9: // Document
                case 11: // Document fragment
                        child = node.firstChild;
                        while ( child )
                        {
                                next = child.nextSibling;
                                walk(child);
                                child = next;
                        }
                        break;

                case 3: // Text node
                        handleText(node);
                        break;
        }
}

function handleText(textNode)
{
        var v = textNode.nodeValue;

        v = v.replace(/\bWeb App\b/g, "Web Thang");
        v = v.replace(/\bWeb app\b/g, "Web thang");
        v = v.replace(/\bweb App\b/g, "web Thang");
        v = v.replace(/\bweb app\b/g, "web thang");

        v = v.replace(/\bWeb Apps\b/g, "Web Thangs");
        v = v.replace(/\bWeb apps\b/g, "Web thangs");
        v = v.replace(/\bweb Apps\b/g, "web Thangs");
        v = v.replace(/\bweb apps\b/g, "web thangs");

        v = v.replace(/\bWeb Site\b/g, "Web Thang");
        v = v.replace(/\bWeb site\b/g, "Web thang");
        v = v.replace(/\bweb Site\b/g, "web Thang");
        v = v.replace(/\bweb site\b/g, "web thang");

        v = v.replace(/\bWeb Sites\b/g, "Web Thangs");
        v = v.replace(/\bWeb sites\b/g, "Web thangs");
        v = v.replace(/\bweb Sites\b/g, "web Thangs");
        v = v.replace(/\bweb sites\b/g, "web thangs");

        v = v.replace(/\bWebSite\b/g, "Web Thang");
        v = v.replace(/\bWebsite\b/g, "Web thang");
        v = v.replace(/\bwebSite\b/g, "web Thang");
        v = v.replace(/\bwebsite\b/g, "web thang");

        v = v.replace(/\bWebSites\b/g, "Web Thangs");
        v = v.replace(/\bWebsites\b/g, "Web thangs");
        v = v.replace(/\bwebSites\b/g, "web Thangs");
        v = v.replace(/\bwebsites\b/g, "web thangs");
        
        textNode.nodeValue = v;
}


