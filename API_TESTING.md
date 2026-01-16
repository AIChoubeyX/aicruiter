# Testing the Authentication API

## Test Signup Endpoint

You can test the signup endpoint using curl or any API client:

### Using curl (PowerShell):
```powershell
$body = @{
    username = "testuser"
    email = "test@example.com"
    password = "test123"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/auth/signup" -Method Post -Body $body -ContentType "application/json"
```

### Using curl (Command Line):
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d "{\"username\":\"testuser\",\"email\":\"test@example.com\",\"password\":\"test123\"}"
```

## Test Login Endpoint

### Using PowerShell:
```powershell
$body = @{
    identifier = "testuser"
    password = "test123"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/auth/login" -Method Post -Body $body -ContentType "application/json"
```

## Common Issues and Solutions

### 1. "Server error during signup"
- Check if MongoDB is connected
- Check server logs for detailed error
- Verify bcryptjs is installed

### 2. "Email already registered" or "Username already taken"
- User already exists in database
- Try different username/email

### 3. Network errors
- Verify server is running on port 5000
- Check CORS is enabled
- Verify API URL in frontend matches backend

## Debugging Steps

1. Check server terminal for error logs
2. Verify MongoDB connection is successful
3. Check if all environment variables are set
4. Test API endpoints directly with curl/Postman
5. Check browser console for frontend errors
