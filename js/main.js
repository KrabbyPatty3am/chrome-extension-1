let data = [], datalength = 0;

chrome.storage.sync.get('data', function (e) {
    console.log(e)
    if(e.data){
        data = e.data;
        datalength = e.data.length
    }
});

function saveChanges() {
    const urlname = '87',
          url = '87';
    // Check that there's some code there.
    if (!urlname || !url) {
        console.log('Error: No value specified');
        return;
    }
    data.length += 1;
    data[datalength] = {urlname, url};
    // Save it using the Chrome extension storage API.
    chrome.storage.sync.set({
        data
    }, function () {
        // Notify that we saved.
        console.log('Settings saved');
    });
}
function getStorage(){
    chrome.storage.sync.get('data', function (e) {
        // Notify that we saved.
        console.log(e.data);
    });
}

let $$ = (el) => {
    let init = Array.prototype.slice.call(document.querySelectorAll(el))
    function handleClass(handle){
        return (classstr) => {
            const strlist = Array.isArray(classstr) ? classstr : classstr.split(' ')
            init.forEach( el => 
                strlist.forEach( str => 
                    el.classList[handle](str)
                )
            )
            return init
        }
    }
    init.addClass = handleClass('add');
    init.removeClass = handleClass('remove');
    init.toggleClass = handleClass('toggle');
    init.append = (element) => {
        if (typeof element === 'string'){
            init.forEach( el => el.innerHTML += element)
        } else {
            init.forEach( el => el.appendChild(element))
        }
    };
    return init
}
