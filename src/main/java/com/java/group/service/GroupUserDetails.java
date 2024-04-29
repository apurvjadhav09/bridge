//package com.java.group.service;
//
//import org.springframework.security.core.GrantedAuthority;
//
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//
//
//import com.java.group.entity.User;
//
//import java.util.Arrays;
//import java.util.Collection;
//import java.util.List;
//import java.util.stream.Collectors;
//
//public class GroupUserDetails implements UserDetails {
//
//    private String userName;
//    private String password;
//    private boolean isActive;
//    private List<GrantedAuthority> authorities;
//    private String uuid; 
//
//    public GroupUserDetails(User user) {
//        this.userName = user.getUserName();
//        this.password = user.getPassword();
//        this.isActive = user.isActive();
//        this.uuid = user.getUuid(); 
//
//        
//        this.authorities = user.getRoles().isEmpty() ?
//                List.of(new SimpleGrantedAuthority("ROLE_USER")) :
//                Arrays.stream(user.getRoles().split(","))
//                        .map(SimpleGrantedAuthority::new)
//                        .collect(Collectors.toList());
//    }
//    
//
//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        return authorities;
//    }
//
//    @Override
//    public String getPassword() {
//        return password;
//    }
//
//    @Override
//    public String getUsername() {
//        return userName;
//    }
//
//    @Override
//    public boolean isAccountNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isAccountNonLocked() {
//        return true;
//    }
//
//    @Override
//    public boolean isCredentialsNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isEnabled() {
//        return isActive;
//    }
//
//    public String getUuid() {
//        return uuid;
//    }
//}
