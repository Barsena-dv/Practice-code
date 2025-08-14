def encrypt(plaintext):
    ciphertext = ""
    
    for char in plaintext:
        if char.isalpha():
            shifted_char = chr(((ord(char.lower()) - 97 + 2) % 26) + 97)  # Shift by 2
            
            if char.isupper():
                shifted_char = shifted_char.upper()
                
            ciphertext += shifted_char
        else:
            ciphertext += char
            
    return ciphertext

def decrypt(ciphertext):
    plaintext = ""
    for char in ciphertext:
        if char.isalpha():
            shifted_char = chr(((ord(char.lower()) - 97 - 2) % 26) + 97)  # Reverse shift by 2
            
            if char.isupper():
                shifted_char = shifted_char.upper()
                
            plaintext += shifted_char
        else:
            plaintext += char
            
    return plaintext
plaintext = "Barsena Dhruv"
print(f"Original text: {plaintext}")

ciphertext = encrypt(plaintext)
print(f"Encrypted text: {ciphertext}")

decrypted_text = decrypt(ciphertext)
print(f"Decrypted text: {decrypted_text}")
print("Enrollment no: 221260116002")
