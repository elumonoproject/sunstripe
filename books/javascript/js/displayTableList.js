const s_table = '<table>';
const s_table_ = '<table ';
const c_table = '</table>';
const s_caption = '<caption>';
const s_caption_ = '<caption ';
const c_caption = '</caption>';
const s_tr = '<tr>';
const s_tr_ = '<tr ';
const c_tr = '</tr>';
const s_th = '<th>';
const s_th_ = '<th ';
const c_th = '</th>';
const s_td = '<td>';
const s_td_ = '<td ';
const c_td = '</td>';
const s_tbody ='<tbody>';
const s_tbody_ ='<tbody ';
const c_tbody ='</tbody>';
const class_ ='class=';
const css_table_list ='"table-list"';
const s_ = '<';
const _s = '>';
const c_ = '</';
const _c = '>';
const _C = '/>';

function displayTableList (tableData)
{
    if (tableData) {
        
        document.write (s_table_ + class_ + css_table_list + _s);
        document.write (s_tbody);
        
        if (tableData.title) {
            document.write (s_caption);
            document.write (tableData.title);
            document.write (c_caption);
        }
        
        for (var l = 0;l < tableData.list.length;l++) {
            document.write (s_tr);
            addTh (tableData.list[l].title);
            addTh (tableData.list[l].type);
            addTh (tableData.list[l].method);
            addTd (tableData.list[l].description);
            document.write (c_tr);
        }
        
        document.write (c_tbody);
        document.write (c_table);
    }
}

function addTh (string)
{
    if (string) {
        document.write (s_th);
        document.write (string);
        document.write (c_th);
    }
}

function addTd (string)
{
    if (string) {
        document.write (s_td);
        document.write (string);
        document.write (c_td);
    }
}