class AppException(Exception):
    """Base application exception"""
    pass

class AuthenticationError(AppException):
    """Authentication failed"""
    pass

class AuthorizationError(AppException):
    """Authorization failed"""
    pass

class ValidationError(AppException):
    """Validation error"""
    pass

class ResourceNotFoundError(AppException):
    """Resource not found"""
    pass

class PaymentError(AppException):
    """Payment related error"""
    pass