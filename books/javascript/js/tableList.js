function tableList (tableData) {
    if (tableData) {
        document.write ('<table class="table-list">');
        document.write ('<tbody>');
        if (tableData.title) {
            document.write ('<caption>');
            document.write (tableData.title);
            document.write ('</caption>');
        }
        for (var l = 0;l < tableData.list.length;l++) {
            document.write ('<tr>');
            document.write ('<th>');
            document.write (tableData.list[l].title);
            document.write ('</th>');
            document.write ('<th>');
            document.write (tableData.list[l].type);
            document.write ('</th>');
            document.write ('<td>');
            document.write (tableData.list[l].description);
            document.write ('</td>');
            document.write ('</tr>');
        }
        document.write ('</tbody>');
        document.write ('</table>');
    }
}