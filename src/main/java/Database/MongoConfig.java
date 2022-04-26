package Database;

import com.udv.store.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MongoConfig extends MongoRepository<User, Long> {
    //Optional<User> findById(Long id);
}
