import sjcl from 'sjcl';

export function getHashPassword(password: string) {
    const myBitArray = sjcl.hash.sha256.hash(password);

    return sjcl.codec.hex.fromBits(myBitArray);
}
