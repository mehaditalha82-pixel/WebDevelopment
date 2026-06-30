# Internet & Networking Basics – Class Notes

## 1. Internet

The **Internet** is a worldwide network of interconnected computer systems. It connects millions of computers and devices globally, allowing them to communicate and share information.

### Definition

> The Internet is a global network of networks that enables communication and data exchange between computers worldwide.

---

## 2. IP Address

An **IP (Internet Protocol) Address** is a unique numerical address assigned to every device connected to a network.

### Purpose

* Identifies a device on the Internet or a local network.
* Allows devices to send and receive data correctly.

### Example

```text
192.168.1.1
```

---

## 3. Domain Name and DNS

Humans prefer easy-to-remember names, while computers communicate using IP addresses.

### Process

```text
Domain Name → DNS Server → IP Address → Website
```

### Example

When you enter:

```text
www.google.com
```

The DNS server converts it into Google's IP address and then connects you to the website.

---

## 4. DNS (Domain Name System)

### Definition

**DNS (Domain Name System)** is known as the **Phonebook of the Internet**.

### Function

* Stores mappings between domain names and IP addresses.
* Converts human-readable domain names into machine-readable IP addresses.

### Example

| Domain Name  | IP Address  |
| ------------ | ----------- |
| google.com   | 142.250.x.x |
| facebook.com | 157.240.x.x |

---

## 5. IP Versions

### IPv4

* Address Size: **32 bits**
* Number of Addresses: **Approximately 4.3 Billion**

Example:

```text
192.168.1.1
```

### IPv6

* Address Size: **128 bits**
* Number of Addresses: **Approximately 340 Undecillion**

Example:

```text
2001:0db8:85a3::8a2e:0370:7334
```

### Comparison

| Feature            | IPv4         | IPv6             |
| ------------------ | ------------ | ---------------- |
| Address Size       | 32 bits      | 128 bits         |
| Possible Addresses | ~4.3 Billion | ~340 Undecillion |
| Example            | 192.168.1.1  | 2001:db8::1      |

---

## 6. Layers of Network Communication

### Simplified Layer Structure

| Layer                 | Function                                              |
| --------------------- | ----------------------------------------------------- |
| Application Layer     | User Interface and Network Applications               |
| Presentation Layer    | Data Formatting, Encryption, Compression              |
| Session Layer         | Establishes and Maintains Connections                 |
| Transport Layer (TCP) | Reliable and Accurate Data Transfer                   |
| Network Layer (IP)    | Routing Data Through Routers                          |
| Data Link Layer (MAC) | Communication Through Switches                        |
| Physical Layer        | Transmission of Signals Through Cables/Wireless Media |

### Data Flow

```text
Application
      ↓
Presentation
      ↓
Session
      ↓
Transport (TCP)
      ↓
Network (IP)
      ↓
Data Link (MAC)
      ↓
Physical (Signals/Cables)
```

### Easy Memory Trick

| Layer        | Remember As       |
| ------------ | ----------------- |
| Application  | User              |
| Presentation | Format            |
| Session      | Connect           |
| TCP          | Reliable Delivery |
| IP           | Router            |
| MAC          | Switch            |
| Physical     | Cable             |

---

## 7. HTTP and HTTPS

### HTTP

**HTTP (HyperText Transfer Protocol)** is the standard protocol used for communication between web browsers and web servers.

### HTTPS

**HTTPS (HyperText Transfer Protocol Secure)** is the secure version of HTTP that uses SSL/TLS encryption to protect data.

### Comparison

| Feature         | HTTP                        | HTTPS                              |
| --------------- | --------------------------- | ---------------------------------- |
| Full Name       | HyperText Transfer Protocol | HyperText Transfer Protocol Secure |
| Security        | No Encryption               | SSL/TLS Encryption                 |
| Data Protection | Not Secure                  | Secure                             |
| Default Port    | 80                          | 443                                |
| Usage           | Normal Websites             | Banking, E-commerce, Login Pages   |

### Example

**HTTP**

```text
http://example.com
```

**HTTPS**

```text
https://example.com
```

The 🔒 lock icon in a browser indicates that HTTPS is being used.

---

# Quick Revision

✅ Internet = Global network connecting millions of computers.

✅ IP Address = Unique address of a device.

✅ DNS = Phonebook of the Internet.

✅ Domain → DNS → IP Address → Website.

✅ IPv4 = 32-bit (~4.3 Billion addresses).

✅ IPv6 = 128-bit (~340 Undecillion addresses).

✅ TCP ensures reliable data delivery.

✅ IP handles routing through routers.

✅ MAC operates at the switch level.

✅ HTTP uses Port 80.

✅ HTTPS uses Port 443 and provides SSL/TLS encryption.

---

# Important Exam Definitions

### Internet

A global network of interconnected computers that enables communication and information sharing worldwide.

### IP Address

A unique numerical identifier assigned to a device on a network.

### DNS

A system that translates domain names into IP addresses.

### HTTP

A protocol used for transferring web pages over the Internet.

### HTTPS

A secure version of HTTP that encrypts data using SSL/TLS.
