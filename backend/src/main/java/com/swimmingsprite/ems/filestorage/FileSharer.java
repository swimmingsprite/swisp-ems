package com.swimmingsprite.ems.filestorage;

import com.swimmingsprite.ems.entity.user.User;

/**
 *
* */
public interface FileSharer {
    enum AccessMode {
        READ_ONLY, READ_WRITE
    }

    void share(User user, String path,);
    void unShare(User user);
    void unShareAll(User user);
    boolean isShared(DirectoryItem directoryItem);
    List<> sharedWith(User user);


}
