package com.swimmingsprite.ems.filestorage;

import com.swimmingsprite.ems.entity.user.User;

import java.util.List;

/**
 *
* */
public interface FileSharer {
    enum AccessMode {
        READ_ONLY, READ_WRITE
    }

    void share(String path, User user, AccessMode accessMode);
    void unShare(String path, User user);
    void unShareAll(String path);
    boolean isShared(DirectoryItem directoryItem);
    boolean isShared(String path);
    List<Integer> sharedList(String path);


}
