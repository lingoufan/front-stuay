/**
 * generateUUID ⽣成UUID
 * @returns {string} 返回字符串
 */
 function generateUUID(){
    let d = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    let r = (d + Math.random()*16)%16 | 0;
    d = Math.floor(d/16);
    return (c=='x' ? r : (r&0x7|0x8)).toString(16);
    });
    return uuid;
   }
   console.log(generateUUID())