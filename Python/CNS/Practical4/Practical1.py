def generate_playfair_matrix(key):
    key = key.replace("J", "I")
    key = "".join(dict.fromkeys(key))
    alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ"
    matrix = "".join(dict.fromkeys(key + alphabet))
    return [list(matrix[i:i+5]) for i in range(0, 25, 5)]


def find_position(matrix, letter):
    for i in range(5):
        for j in range(5):
            if matrix[i][j] == letter:
                return i, j
    return None


def prepare_text(plain_text):
    plain_text = plain_text.upper().replace("J", "I").replace(" ", "")
    processed_text = ""
    i = 0
    while i < len(plain_text):
        if i == len(plain_text) - 1:
            processed_text += plain_text[i] + "X"
            i += 1
        elif plain_text[i] == plain_text[i + 1]:
            processed_text += plain_text[i] + "X"
            i += 1
        else:
            processed_text += plain_text[i] + plain_text[i + 1]
            i += 2
    return processed_text


def encrypt_playfair(plain_text, key):
    matrix = generate_playfair_matrix(key)
    plain_text = prepare_text(plain_text)
    cipher_text = ""
    
    for i in range(0, len(plain_text), 2):
        row1, col1 = find_position(matrix, plain_text[i])
        row2, col2 = find_position(matrix, plain_text[i + 1])
        
        if row1 == row2:
            cipher_text += matrix[row1][(col1 + 1) % 5] + matrix[row2][(col2 + 1) % 5]
        elif col1 == col2:  # Same column
            cipher_text += matrix[(row1 + 1) % 5][col1] + matrix[(row2 + 1) % 5][col2]
        else:
            cipher_text += matrix[row1][col2] + matrix[row2][col1]
    
    return cipher_text


def decrypt_playfair(cipher_text, key):
    matrix = generate_playfair_matrix(key)
    plain_text = ""
    
    for i in range(0, len(cipher_text), 2):
        row1, col1 = find_position(matrix, cipher_text[i])
        row2, col2 = find_position(matrix, cipher_text[i + 1])
        
        if row1 == row2:
            plain_text += matrix[row1][(col1 - 1) % 5] + matrix[row2][(col2 - 1) % 5]
        elif col1 == col2:
            plain_text += matrix[(row1 - 1) % 5][col1] + matrix[(row2 - 1) % 5][col2]
        else:
            plain_text += matrix[row1][col2] + matrix[row2][col1]
    
    return plain_text


if __name__ == "__main__":
    key = "PHEONIX"
    plain_text = "HET PATEL"
    cipher_text = encrypt_playfair(plain_text, key)
    decrypted_text = decrypt_playfair(cipher_text, key)

    print(f"Key: {key}")
    print(f"Plain Text: {plain_text}")
    print(f"Cipher Text: {cipher_text}")
    print(f"Decrypted Text: {decrypted_text}")
    print("221260116058")