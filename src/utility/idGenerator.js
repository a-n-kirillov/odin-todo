export default function getUniqueId() {
    return BigInt(Date.now()).toString()
}