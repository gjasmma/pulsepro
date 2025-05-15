from fastapi import APIRouter
from app.api.v1.routes import user

from fastapi import Depends, HTTPException, status
from jose import JWTError, jwt
from app.models.user import User
from app.core.config import settings
from sqlalchemy.orm import Session

def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    credentials_exception = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Could not validate token")
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    user = db.query(User).filter(User.email == email).first()
    if user is None:
        raise credentials_exception
    return user

api_router = APIRouter()
api_router.include_router(user.router, prefix="/users", tags=["Users"])