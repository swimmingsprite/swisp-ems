package com.swimmingsprite.ems.model.user;


public interface AvatarUser extends User {
    String getRole();
    String getAvatarColor();
    String getAvatarImage();
    void setRole(String role);
    void setAvatarColor(String avatarColor);
    void setAvatarImage(String avatarImage);
    User getUser();
    void setUser(UserImpl avatarUser);
}
