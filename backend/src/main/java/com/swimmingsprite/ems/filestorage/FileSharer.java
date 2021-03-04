package com.swimmingsprite.ems.filestorage;

import com.swimmingsprite.ems.entity.user.User;

import java.util.List;

public interface FileSharer {
    enum AccessMode {
        READ_ONLY, READ_WRITE
    }

    void share(String directoryItem, User user, AccessMode accessMode);
    void unShare(String directoryItem, User user);
    void unShareAll(String directory);
    boolean isShared(String directoryItem);
    List<Integer> sharedList(String directoryItem);


}
