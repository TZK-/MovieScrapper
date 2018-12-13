export function downloadBrowser(blob, filename) {
    const objectUrl = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.setAttribute('href', objectUrl);
    a.setAttribute('download', filename);

    document.body.appendChild(a);

    a.click();
    a.remove();

    URL.revokeObjectURL(objectUrl);
};