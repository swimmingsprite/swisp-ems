package com.swimmingsprite.ems.filestorage;

import com.swimmingsprite.ems.entity.user.User;

import java.util.Map;

public interface FileSharer {
    enum AccessMode {
        READ_ONLY, READ_WRITE
    }

    void share(String directoryPath, User user, AccessMode accessMode);
    void unShare(String directoryPath, User user);
    void unShareAll(String directoryItemPath);
    boolean isShared(String directoryItemPath);
    Map<Integer, AccessMode> sharedList(String directoryItemPath);
}
