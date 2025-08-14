def generate_key(plaintext, keyword):
    """Generate a key that repeats the keyword to match the length of the plaintext"""
    key = list(keyword)
    if len(plaintext) == len(key):
        return "".join(key)
    else:
        for i in range(len(plaintext) - len(key)):
            key.append(key[i % len(key)])
    return "".join(key)

def encrypt(plaintext, keyword):
    """Encrypt the plaintext using the Vigenère cipher with the given keyword"""
    plaintext = plaintext.upper().replace(" ", "")
    keyword = keyword.upper()
    key = generate_key(plaintext, keyword)
    cipher_text = []

    for i in range(len(plaintext)):
        if plaintext[i].isalpha():
            shift = ord(key[i]) - ord('A')
            encrypted_char = chr(((ord(plaintext[i]) - ord('A') + shift) % 26) + ord('A'))
            cipher_text.append(encrypted_char)
        else:
            cipher_text.append(plaintext[i])

    return "".join(cipher_text)

def decrypt(ciphertext, keyword):
    """Decrypt the ciphertext using the Vigenère cipher with the given keyword"""
    ciphertext = ciphertext.upper().replace(" ", "")
    keyword = keyword.upper()
    key = generate_key(ciphertext, keyword)
    decrypted_text = []

    for i in range(len(ciphertext)):
        if ciphertext[i].isalpha():
            shift = ord(key[i]) - ord('A')
            decrypted_char = chr(((ord(ciphertext[i]) - ord('A') - shift) % 26) + ord('A'))
            decrypted_text.append(decrypted_char)
        else:
            decrypted_text.append(ciphertext[i])

    return "".join(decrypted_text)

plaintext = "DHRUV BARSENA"
keyword = "Pheonix"

print("Plain Text:", plaintext)
ciphertext = encrypt(plaintext, keyword)
print("Encrypted Text:", ciphertext)
decrypted_text = decrypt(ciphertext, keyword)
print("Decrypted Text:", decrypted_text)
print("Enrollment Number: 221260116002")