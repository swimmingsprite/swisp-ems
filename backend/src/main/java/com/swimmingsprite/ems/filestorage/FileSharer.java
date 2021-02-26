package com.swimmingsprite.ems.filestorage;

import com.swimmingsprite.ems.entity.user.User;

import java.util.List;

public interface FileSharer {
    enum AccessMode {
        READ_ONLY, READ_WRITE
    }

    void share(DirectoryItem directoryItem, User user, AccessMode accessMode);
    void unShare(DirectoryItem directoryItem, User user);
    void unShareAll(DirectoryItem directory);
    boolean isShared(DirectoryItem directoryItem);
    List<Integer> sharedList(DirectoryItem directoryItem);


}
