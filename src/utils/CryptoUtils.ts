import crypto from "crypto-js";
import {CryptoConfig} from "@/typings";

/**
 * 计算文件sha256
 *
 * @author CAIXYPROMISE
 * @version 1.0
 * @since 2024/9/1 下午6:47
 */
const calculateSHA256 = (file: File): Promise<string> =>
{
    return new Promise((resolve, reject) =>
    {
        const reader = new FileReader();
        reader.onload = () =>
        {
            const hash = crypto.SHA256(crypto.enc.Latin1.parse(reader.result as string)).toString();
            resolve(hash);
        };
        reader.onerror = reject;
        reader.readAsBinaryString(file);
    });
};

/**
 * 将Base64字符串解码为普通字符串
 *
 * @author CAIXYPROMISE
 * @since 2024/7/17 下午4:50
 * @version 1.0
 */
const decodeBase64 = (base64: string): string =>
{
    const words = CryptoJS.enc.Base64.parse(base64);
    return CryptoJS.enc.Utf8.stringify(words);
};

/**
 * 将普通字符串编码为Base64字符串
 *
 * @author CAIXYPROMISE
 * @since 2024/7/17 下午4:50
 * @version 1.0
 */
const encodeBase64 = (text: string): string =>
{
    const words = CryptoJS.enc.Utf8.parse(text);
    return CryptoJS.enc.Base64.stringify(words);
};


// 用于加密AES的函数
const obscureData = (plainText: string, config: CryptoConfig): string =>
{
    const key = CryptoJS.enc.Base64.parse(config.base64Key);
    const iv = CryptoJS.enc.Base64.parse(config.base64Iv);
    const encrypted = CryptoJS.AES.encrypt(plainText, key, {
        iv: iv,
        mode: config.mode ?? CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}

// 用于解密AES的函数
const revealData = (encryptedText: string, config: CryptoConfig): string =>
{
    const key = CryptoJS.enc.Base64.parse(config.base64Key);
    const iv = CryptoJS.enc.Base64.parse(config.base64Iv);
    const decrypted = CryptoJS.AES.decrypt(encryptedText, key, {
        iv: iv,
        mode: config.mode ?? CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}

export {
    calculateSHA256,
    revealData,
    obscureData
}
