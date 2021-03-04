package com.swimmingsprite.ems.filestorage;

import com.swimmingsprite.ems.entity.user.User;

import java.util.Map;

public class DatabaseSharer implements FileSharer {
    @Override
    public void share(String directoryPath, User user, AccessMode accessMode) {

    }

    @Override
    public void unShare(String directoryPath, User user) {

    }

    @Override
    public void unShareAll(String directoryItemPath) {

    }

    @Override
    public boolean isShared(String directoryItemPath) {
        return false;
    }

    @Override
    public Map<Integer, AccessMode> sharedList(String directoryItemPath) {
        return null;
    }
}
