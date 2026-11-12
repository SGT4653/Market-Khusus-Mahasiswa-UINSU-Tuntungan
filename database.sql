CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(12,2) NOT NULL,
    category ENUM(
        'Buku',
        'Elektronik',
        'Fashion',
        'Perlengkapan Kos',
        'Alat Tulis',
        'Lainnya'
    ) NOT NULL DEFAULT 'Lainnya',
    condition_status ENUM(
        'Baru',
        'Seperti Baru',
        'Baik',
        'Cukup'
    ) NOT NULL DEFAULT 'Baik',
    photo VARCHAR(255) DEFAULT NULL,
    status ENUM('Tersedia', 'Terjual')
        NOT NULL DEFAULT 'Tersedia',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_products_category (category),
    INDEX idx_products_status (status),

    CONSTRAINT fk_products_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);
