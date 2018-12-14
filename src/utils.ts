import {Toast, ToastController} from "ionic-angular";

export function downloadBrowser(blob, filename): void {
    const objectUrl = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.setAttribute('href', objectUrl);
    a.setAttribute('download', filename);

    document.body.appendChild(a);
    console.log(objectUrl);
    a.click();
    a.remove();

    URL.revokeObjectURL(objectUrl);
}

export function toast(
    toastController: ToastController,
    message: string
): Toast {
    const toast = toastController.create({
        message: message,
        duration: 3000,
        position: 'top'
    });

    toast.present();

    return toast;
}
