package com.java.group.entity;

import java.util.ArrayList;




import java.util.Collection;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;







@Entity
@Table(name = "SHM_BRIDGE_ADMIN_LOGIN_TBL",uniqueConstraints = {
        @UniqueConstraint(columnNames = "email")})
public class User implements UserDetails{
	
	
	
    @Id
    
    @GeneratedValue(strategy = javax.persistence.GenerationType.IDENTITY)
    @Column(name="id", unique = true, nullable = false)
    private Long id;
    
  
    
    private String name;
    
    private String password;
    private String role;
    
    @Column(unique = true, length = 255)
    private String email;
    private String uuid;
    
    private String companyname;
    
    private String designation;
    
    
	 private Long phonenumber;
    
    @Column(name = "last_login")
    private Date lastLogin;
    
    @Column(name = "is_password_reset_required")
    private Boolean isPasswordResetRequired;
    
    private String token;
    
    @Column(name = "reset_token")
    private String resettoken;
    
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<UserVerificationToken> passwordResetTokens;
     
    private String selectedRole;
    private Long bridgeid1;
    
    private String bridgeRole1;
    
 private Long bridgeid2;
    
    private String bridgeRole2;
    
 private Long bridgeid3;
    
    private String bridgeRole3;
    
 private Long bridgeid4;
    
    private String bridgeRole4;
    
 private Long bridgeid5;
    
    private String bridgeRole5;
    
 private Long bridgeid6;
 
    
    private String bridgeRole6;
    
 private Long bridgeid7;
    
    private String bridgeRole7;
    
 private Long bridgeid8;
    
    private String bridgeRole8;
    
 private Long bridgeid9;
    
    private String bridgeRole9;
    
 private Long bridgeid10;
    
    private String bridgeRole10;
    
    
    

   

    
    public void addPasswordResetToken(UserVerificationToken token) {
        if (passwordResetTokens == null) {
            passwordResetTokens = new ArrayList<>();
        }
        passwordResetTokens.add(token);
        token.setUser(this);
    }

   

	public String getName() {
		return name;
	}


	public boolean isValidPassword(String currentPassword) {
	    return currentPassword.equals(this.password);
	}


	public void setName(String name) {
		this.name = name;
	}





	public Boolean getIsPasswordResetRequired() {
		return isPasswordResetRequired;
	}



	public void setIsPasswordResetRequired(Boolean isPasswordResetRequired) {
		this.isPasswordResetRequired = isPasswordResetRequired;
	}



	public String getToken() {
		return token;
	}



	public void setToken(String token) {
		this.token = token;
	}



	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getUuid() {
		return uuid;
	}
	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	

	



	public Long getId() {
		return id;
	}





	public String getSelectedRole() {
		return selectedRole;
	}



	public void setSelectedRole(String selectedRole) {
		this.selectedRole = selectedRole;
	}



	public void setId(Long id) {
		this.id = id;
	}


	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
		
	}
	
	

	public Date getLastLogin() {
		return lastLogin;
	}
	public void setLastLogin(Date lastLogin) {
		this.lastLogin = lastLogin;
	}
	
	
	public String getCompanyname() {
		return companyname;
	}



	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}



	public String getDesignation() {
		return designation;
	}



	public void setDesignation(String designation) {
		this.designation = designation;
	}



	public Long getPhonenumber() {
		return phonenumber;
	}



	public void setPhonenumber(Long phonenumber) {
		this.phonenumber = phonenumber;
	}



	public List<UserVerificationToken> getPasswordResetTokens() {
		return passwordResetTokens;
	}



	public void setPasswordResetTokens(List<UserVerificationToken> passwordResetTokens) {
		this.passwordResetTokens = passwordResetTokens;
	}



	public String getResettoken() {
		return resettoken;
	}



	public void setResettoken(String resettoken) {
		this.resettoken = resettoken;
	}



	public User() {
		super();
		
	}
	

	public Boolean isPasswordResetRequired() {
		return isPasswordResetRequired;
	}



	public void setPasswordResetRequired(Boolean isPasswordResetRequired) {
		this.isPasswordResetRequired = isPasswordResetRequired;
	}


	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		List<GrantedAuthority> authorities = new ArrayList<>();
//        authorities.add(new SimpleGrantedAuthority("ROLE_"+role.toUpperCase()));
		 if (role != null) {
		        authorities.add(new SimpleGrantedAuthority("ROLE_" + role.toUpperCase()));
		    }
        return authorities;
	}
	
	
	@Override
	public String getUsername() {
	
		return email;
	}
	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}
	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}
	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}
	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}



	public Long getBridgeid1() {
		return bridgeid1;
	}


	public void setBridgeid1(Long bridgeid1) {
		this.bridgeid1 = bridgeid1;
	}


	public String getBridgeRole1() {
		return bridgeRole1;
	}



	public void setBridgeRole1(String bridgeRole1) {
		this.bridgeRole1 = bridgeRole1;
	}

	public Long getBridgeid2() {
		return bridgeid2;
	}

	public void setBridgeid2(Long bridgeid2) {
		this.bridgeid2 = bridgeid2;
	}

	public String getBridgeRole2() {
		return bridgeRole2;
	}




	public void setBridgeRole2(String bridgeRole2) {
		this.bridgeRole2 = bridgeRole2;
	}


	public Long getBridgeid3() {
		return bridgeid3;
	}


	public void setBridgeid3(Long bridgeid3) {
		this.bridgeid3 = bridgeid3;
	}


	public String getBridgeRole3() {
		return bridgeRole3;
	}



	public void setBridgeRole3(String bridgeRole3) {
		this.bridgeRole3 = bridgeRole3;
	}


	public Long getBridgeid4() {
		return bridgeid4;
	}

	public void setBridgeid4(Long bridgeid4) {
		this.bridgeid4 = bridgeid4;
	}



	public String getBridgeRole4() {
		return bridgeRole4;
	}


	public void setBridgeRole4(String bridgeRole4) {
		this.bridgeRole4 = bridgeRole4;
	}



	public Long getBridgeid5() {
		return bridgeid5;
	}



	public void setBridgeid5(Long bridgeid5) {
		this.bridgeid5 = bridgeid5;
	}


	public String getBridgeRole5() {
		return bridgeRole5;
	}


	public void setBridgeRole5(String bridgeRole5) {
		this.bridgeRole5 = bridgeRole5;
	}


	public Long getBridgeid6() {
		return bridgeid6;
	}


	public void setBridgeid6(Long bridgeid6) {
		this.bridgeid6 = bridgeid6;
	}


	public String getBridgeRole6() {
		return bridgeRole6;
	}


	public void setBridgeRole6(String bridgeRole6) {
		this.bridgeRole6 = bridgeRole6;
	}

	public Long getBridgeid7() {
		return bridgeid7;
	}

	public void setBridgeid7(Long bridgeid7) {
		this.bridgeid7 = bridgeid7;
	}



	public String getBridgeRole7() {
		return bridgeRole7;
	}

	public void setBridgeRole7(String bridgeRole7) {
		this.bridgeRole7 = bridgeRole7;
	}


	public Long getBridgeid8() {
		return bridgeid8;
	}


	public void setBridgeid8(Long bridgeid8) {
		this.bridgeid8 = bridgeid8;
	}


	public String getBridgeRole8() {
		return bridgeRole8;
	}


	public void setBridgeRole8(String bridgeRole8) {
		this.bridgeRole8 = bridgeRole8;
	}


	public Long getBridgeid9() {
		return bridgeid9;
	}



	public void setBridgeid9(Long bridgeid9) {
		this.bridgeid9 = bridgeid9;
	}



	public String getBridgeRole9() {
		return bridgeRole9;
	}


	public void setBridgeRole9(String bridgeRole9) {
		this.bridgeRole9 = bridgeRole9;
	}



	public Long getBridgeid10() {
		return bridgeid10;
	}


	public void setBridgeid10(Long bridgeid10) {
		this.bridgeid10 = bridgeid10;
	}



	public String getBridgeRole10() {
		return bridgeRole10;
	}

	public void setBridgeRole10(String bridgeRole10) {
		this.bridgeRole10 = bridgeRole10;
	}
	
	
	
    
    
    
    
}